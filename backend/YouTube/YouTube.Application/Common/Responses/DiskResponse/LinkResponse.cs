using System.Text.Json.Serialization;

namespace YouTube.Application.Common.Responses.DiskResponse;

public class LinkResponse
{
    [JsonPropertyName("href")]
    public string Href { get; set; }
    
    [JsonPropertyName("method")]
    public string Method { get; set; }
    
    [JsonPropertyName("templated")]
    public bool Templated { get; set; }
    
}