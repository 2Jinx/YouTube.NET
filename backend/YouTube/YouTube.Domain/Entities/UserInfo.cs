using YouTube.Domain.Common;

namespace YouTube.Domain.Entities;

public class UserInfo : BaseEntity
{
    /// <summary>
    /// Имя пользователя
    /// </summary>
    public required string Name { get; set; } 

    /// <summary>
    /// Фамилия пользователя
    /// </summary>
    public required string Surname { get; set; }

    /// <summary>
    /// Дата рождения пользователя
    /// </summary>
    public DateOnly BirthDate { get; set; }

    /// <summary>
    /// Пол пользователя
    /// </summary>
    public string Gender { get; set; } = default!;

    /// <summary>
    /// Навигационное свойство для связи с User
    /// </summary>
    public User User { get; set; } = default!;
    

}