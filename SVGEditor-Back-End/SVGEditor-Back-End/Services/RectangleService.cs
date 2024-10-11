using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Extensions.Options;
using SVGEditor_Back_End.DTOs;
using SVGEditor_Back_End.Models;
using SVGEditor_Back_End.Models.Exceptions;
using System.Text.Json;

namespace SVGEditor_Back_End.Services
{
    public class RectangleService : IRectangleService
    {
        private readonly IOptionsMonitor<RectangleSettings> _settings;

        public RectangleService(IOptionsMonitor<RectangleSettings> settings)
        {
            _settings = settings;
        }

        public ServiceResponse<GetRectangleSettingsDto> GetRectangleSettings()
        {
            var response = new ServiceResponse<GetRectangleSettingsDto>();
            var settings = new GetRectangleSettingsDto()
            {
                Width = _settings.CurrentValue.Width,
                Height = _settings.CurrentValue.Height
            };
            response.Data = settings;
            response.Message = "Settings have been successfuly fetched.";
            return response;
        }

        public async Task<bool> IsRectangleValid(ModifyRectangleSettingsDto settings)
        {
            await Task.Delay(10000); // Delay for 10 seconds
            return settings.Width <= settings.Height;
        }

        public async Task<ServiceResponse<string>> ModifyRectangleSettings(ModifyRectangleSettingsDto _settings)
        {
            var response = new ServiceResponse<string>();
            if (await IsRectangleValid(_settings) is false) 
                throw new BadRequestException("Rectangle not valid. " +
                    "Width can not exceed height. " +
                    "Save was not successful. " +
                    "Reloading the page will bring back previously saved dimensions.");

            string jsonString = await File.ReadAllTextAsync("./rectangleSettings.json");

            var appSettings = JsonSerializer.Deserialize<RectangleSettings>(jsonString);

            if (appSettings is not null)
            {
                appSettings.Width = _settings.Width;
                appSettings.Height = _settings.Height;
            }

            string updatedJson = JsonSerializer.Serialize(appSettings, new JsonSerializerOptions { WriteIndented = true });

            await File.WriteAllTextAsync("./rectangleSettings.json", updatedJson);
            response.Message = "Rectangle updated successfully";
            return response;
        }
    }
}
