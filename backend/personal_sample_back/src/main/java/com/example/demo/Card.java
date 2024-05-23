package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "card")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long card_id;

    @NotNull(message = "ユーザーIDは必須です")
    private Long user_id;

    @NotBlank(message = "名前は必須です")
    @Size(max = 100, message = "名前は100文字以下で入力してください")
    private String name;

    @NotNull(message = "年齢は必須です")
    private Integer age;

    @NotBlank(message = "誕生日は必須です")
    private String birthday;

    @NotBlank(message = "趣味は必須です")
    @Size(max = 255, message = "趣味は255文字以下で入力してください")
    private String hobby;

    @NotBlank(message = "趣味のURLは必須です")
    @Pattern(
        regexp = "^https?://.*$",
        message = "趣味のURLは有効なURL形式で入力してください"
    )
    private String hobby_url;

    @NotBlank(message = "好きな食べ物は必須です")
    @Size(max = 100, message = "好きな食べ物は100文字以下で入力してください")
    private String food;

    @NotBlank(message = "得意なことは必須です")
    @Size(max = 255, message = "得意なことは255文字以下で入力してください")
    private String strong;


    @NotBlank(message = "好きなスポーツは必須です")
    @Size(max = 100, message = "好きなスポーツは100文字以下で入力してください")
    private String sports;

    @NotBlank(message = "性別は必須です")
    @Pattern(
        regexp = "^(男性|女性|その他)$",
        message = "性別は「男性」、「女性」、または「その他」を選択してください"
    )
    private String sex;
}
