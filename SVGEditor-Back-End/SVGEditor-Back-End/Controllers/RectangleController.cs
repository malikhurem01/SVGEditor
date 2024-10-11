using Microsoft.AspNetCore.Mvc;
using SVGEditor_Back_End.DTOs;
using SVGEditor_Back_End.Services;

namespace SVGEditor_Back_End.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RectangleController : Controller
    {
        private readonly IConfigurationService _configurationService;
        public RectangleController(IConfigurationService configurationService)
        {
            _configurationService = configurationService;
        }

        [HttpGet]
        public ActionResult<GetRectangleSettings> Get() {
         return Ok(_configurationService.GetRectangleSettings());
        }

        [HttpPatch]
        public async Task<ActionResult<string>> ModifyRectangle(PatchRectangleSettings settings, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            return Ok(await _configurationService.ModifyRectangleSettings(settings));
        }
    }
}
