using SVGEditor_Back_End.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Builder extensions
builder.Services.RegisterCORSPolicy();
builder.Services.RegisterJSONConfiguration(builder.Configuration); //This includes JSON settings file for RECTANGLE SVG dimensions
builder.Services.RegisterServices();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//Cors configuration
app.UseCors(RegisterCORSExtension.origin);

app.UseHttpsRedirection();

//My custom made global error handling middleware
app.UseMiddleware<GlobalErrorHandlingMiddleware>();

app.UseAuthorization();

app.MapControllers();

app.Run();
