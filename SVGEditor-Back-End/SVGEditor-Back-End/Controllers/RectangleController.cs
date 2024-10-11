using Microsoft.AspNetCore.Mvc;
using SVGEditor_Back_End.DTOs;
using SVGEditor_Back_End.Models;
using SVGEditor_Back_End.Services;

namespace SVGEditor_Back_End.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RectangleController : Controller
    {
        private readonly IRectangleService _rectangleService;
        public RectangleController(IRectangleService rectangleService)
        {
            _rectangleService = rectangleService;
        }

        [HttpGet("dimensions")]
        public ActionResult<ServiceResponse<GetRectangleSettingsDto>> Get() {
         return Ok(_rectangleService.GetRectangleSettings());
        }

        [HttpPut("modify")]
        public async Task<ActionResult<ServiceResponse<string>>> ModifyRectangle(ModifyRectangleSettingsDto settings, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            return Ok(await _rectangleService.ModifyRectangleSettings(settings));
        }
    }
}
