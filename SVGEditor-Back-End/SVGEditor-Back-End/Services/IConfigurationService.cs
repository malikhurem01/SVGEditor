using Microsoft.AspNetCore.Mvc;
using SVGEditor_Back_End.DTOs;

namespace SVGEditor_Back_End.Services
{
    public interface IConfigurationService
    {
        public GetRectangleSettings GetRectangleSettings();
        public Task<bool> IsRectangleValid (PatchRectangleSettings settings);
        public Task<string> ModifyRectangleSettings(PatchRectangleSettings _settings);

    }
}
