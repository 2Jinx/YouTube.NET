using YouTube.Application.Extensions;
using YouTube.Infrastructure.Extensions;
using YouTube.Persistence.Extensions;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddInfrastructureLayer();
builder.Services.AddPersistenceLayer(builder.Configuration);
builder.Services.AddApplicationLayer();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.UseAuthentication();
app.UseAuthorization();
app.UseHttpsRedirection();

app.Run();