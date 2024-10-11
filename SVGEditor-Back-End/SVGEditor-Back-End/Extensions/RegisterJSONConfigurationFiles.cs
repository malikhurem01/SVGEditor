using SVGEditor_Back_End.DTOs;

namespace SVGEditor_Back_End.Extensions
{
    public static class RegisterJSONConfigurationFiles
    {
        public static void RegisterJSONConfiguration(this IServiceCollection service, ConfigurationManager config)
        {
            config.AddJsonFile("rectangleSettings.json", optional: false, reloadOnChange: true);
            service.Configure<RectangleSettings>(config);
        }
    }
}
