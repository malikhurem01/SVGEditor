using Microsoft.AspNetCore.Mvc;
using SVGEditor_Back_End.DTOs;
using SVGEditor_Back_End.Models;

namespace SVGEditor_Back_End.Services
{
    public interface IRectangleService
    {
        public ServiceResponse<GetRectangleSettingsDto> GetRectangleSettings();
        public Task<bool> IsRectangleValid (ModifyRectangleSettingsDto settings);
        public Task<ServiceResponse<string>> ModifyRectangleSettings(ModifyRectangleSettingsDto _settings);

    }
}
