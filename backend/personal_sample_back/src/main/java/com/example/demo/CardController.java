package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cards")
@CrossOrigin(origins = "http://localhost:3000")
public class CardController {
	
	@Autowired
	private CardService cardService;
	
	@GetMapping("/")
	public List<Card> getCardAll(){
		return cardService.getCardAll();
	}
	
	@GetMapping("{id}")
	public Card getCardById(@PathVariable Long id) {
		return cardService.getCardById(id);
	}
	
	@PostMapping
	public Card createCard(@RequestBody Card card) {
		return cardService.createCard(card);
	}

	@PutMapping("{id}")
	public Card updateCard(@PathVariable Long id,@RequestBody Card card) {
		return cardService.updateCard(id, card);
	}
	
	@DeleteMapping("{id}")
	public void deleteCard(@PathVariable Long id) {
		cardService.deleteCard(id);
	}
}
