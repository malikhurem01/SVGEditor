using SVGEditor_Back_End.Models.Exceptions;
using System.Net;
using System.Text.Json;

namespace SVGEditor_Back_End.Extensions
{
    public class GlobalErrorHandlingMiddleware
    {
        private readonly RequestDelegate _next;

        public GlobalErrorHandlingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            HttpStatusCode statusCode;
            string message;
            string specialMessage = "";

            var exceptionType = exception.GetType();

            if (exceptionType == typeof(BadRequestException))
            {
                message = exception.Message;
                statusCode = HttpStatusCode.BadRequest;
            }
            else if (exceptionType == typeof(NotImplementedException))
            {
                statusCode = HttpStatusCode.NotImplemented;
                message = exception.Message;
            }
            else if (exceptionType == typeof(OperationCanceledException))
            {
                statusCode = HttpStatusCode.OK;
                message = exception.Message;
            }
            else
            {
                statusCode = HttpStatusCode.InternalServerError;
                message = "Error occured. Please contact support.";
                specialMessage = exception.Message;
            }

            var exceptionResult = JsonSerializer.Serialize(new { message, statusCode, specialMessage });
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)statusCode;

            return context.Response.WriteAsync(exceptionResult);
        }
    }
}
