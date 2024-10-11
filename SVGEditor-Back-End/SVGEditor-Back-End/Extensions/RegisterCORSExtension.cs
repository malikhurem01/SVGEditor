namespace SVGEditor_Back_End.Extensions
{
    public static class RegisterCORSExtension
    {
        public static string origin = "FrontEndReactApp";
        public static void RegisterCORSPolicy(this IServiceCollection service)
        {
            service.AddCors(options =>
            {
                options.AddPolicy(name: origin,
                policy =>
                {
                    policy
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });
        }
    }
}
