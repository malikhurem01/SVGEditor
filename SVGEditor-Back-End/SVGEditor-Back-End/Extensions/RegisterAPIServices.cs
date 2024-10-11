using SVGEditor_Back_End.DTOs;
using SVGEditor_Back_End.Services;

namespace SVGEditor_Back_End.Extensions
{
    public static class RegisterAPIServices
    {
        public static void RegisterServices(this IServiceCollection service)
        {
            service.AddSingleton<IRectangleService, RectangleService>();
        }
    }
}
