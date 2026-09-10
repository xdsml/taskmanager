package com.ismail.taskmanager.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String title;
    private String description;
    @NotBlank
    @Enumerated(EnumType.STRING)
    private TaskStatus status;
    
    public Task(String title,TaskStatus status,String description) {
    	this.title = title;
    	this.description = description;
    	this.status = status;
    }
    
    public Long getId() {
    	return id;
    }
    
    public String getTitle() {
    	return title;
    }
    
    public String getDescription() {
    	return description;
    }
    
    public TaskStatus getStatus() {
    	return status;
    }
    
    public void setTitle(String title) {
    	this.title = title;
    }
    
    public void setDescription(String description) {
    	this.description = description;	 
    }
	
    public void setStatus(TaskStatus status) {
    	this.status = status;
    }

}
