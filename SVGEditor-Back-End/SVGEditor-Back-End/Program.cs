using Microsoft.AspNetCore.Mvc;
using SVGEditor_Back_End.DTOs;
using SVGEditor_Back_End.Services;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IConfigurationService, ConfigurationService>();
builder.Configuration
    .AddJsonFile("rectangleSettings.json", optional: false, reloadOnChange: false);
builder.Services.Configure<RectangleSettings>(builder.Configuration.GetSection("Parameters"));


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

var config = app.Services.GetRequiredService<IConfiguration>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
