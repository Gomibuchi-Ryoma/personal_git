package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User getUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	public User updateUser(Long id,User userDetails) {
		User user = userRepository.findById(id).orElse(null);
		if(user != null) {
			user.setName(userDetails.getName());
			user.setEmail(userDetails.getEmail());
			user.setPassword(userDetails.getPassword());
			return userRepository.save(user);
			
		}
		return null;
	}
	
	//全検索
	public List<User> getUserAll() {
		return userRepository.findAll();
	}
	
	//削除
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
	
	public Optional<User> getUserByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
	
	
}
