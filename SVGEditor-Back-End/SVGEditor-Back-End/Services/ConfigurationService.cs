using Microsoft.Extensions.Options;
using SVGEditor_Back_End.DTOs;
using System.Runtime.CompilerServices;
using System.Text.Json;

namespace SVGEditor_Back_End.Services
{
    public class ConfigurationService : IConfigurationService
    {
        private readonly RectangleSettings _settings;

        public ConfigurationService(IOptions<RectangleSettings> settings)
        {
            _settings = settings.Value;
        }

        public GetRectangleSettings GetRectangleSettings()
        {
            var response = new GetRectangleSettings()
            {
                Width = _settings.Width,
                Height = _settings.Height,
                PosX = _settings.PosX,
                PosY = _settings.PosY
            };
            return response;
        }

        public async Task<bool> IsRectangleValid(PatchRectangleSettings settings)
        {
            await Task.Delay(10000); // Delay for 5 seconds (5000 milliseconds)
            return settings.Width <= settings.Height;
        }

        public async Task<string> ModifyRectangleSettings(PatchRectangleSettings _settings)
        {
            if (await IsRectangleValid(_settings) is false) throw new Exception("Rectangle not valid.");
            string jsonString = await File.ReadAllTextAsync("./rectangleSettings.json");

            var appSettings = JsonSerializer.Deserialize<RectangleSettings>(jsonString);

            appSettings.Width = _settings.Width;
            appSettings.Height = _settings.Height;
            appSettings.PosX = _settings.PosX;
            appSettings.PosY = _settings.PosY;

            string updatedJson = JsonSerializer.Serialize(appSettings, new JsonSerializerOptions { WriteIndented = true });

            await File.WriteAllTextAsync("./rectangleSettings.json", updatedJson);

            return "Rectangle updated successfully";
        }
    }
}
