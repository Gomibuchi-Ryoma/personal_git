package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {
	
	@Autowired
	private CardRepository cardRepository;
	
	public List<Card> getCardAll(){
		return cardRepository.findAll();
	}
	
	public void deleteCard(Long id) {
		cardRepository.deleteById(id);
	}
	
	public Card getCardById(Long id) {
		return cardRepository.findById(id).orElse(null);
	}
	
	public Card createCard(Card card) {
		return cardRepository.save(card);
	}
	
	public Card updateCard(Long id,Card cardDetails) {
		Card card = cardRepository.findById(id).orElse(null);
		if(card != null) {
			card.setName(cardDetails.getName());
			card.setAge(cardDetails.getAge());
			card.setBirthday(cardDetails.getBirthday());
			card.setHobby(cardDetails.getHobby());
			card.setHobby_url(cardDetails.getHobby_url());
			card.setFood(cardDetails.getFood());
			card.setStrong(cardDetails.getStrong());
			card.setSports(cardDetails.getSports());
			card.setSex(cardDetails.getSex());
			return cardRepository.save(card);
		}
		return null;
	}

}
