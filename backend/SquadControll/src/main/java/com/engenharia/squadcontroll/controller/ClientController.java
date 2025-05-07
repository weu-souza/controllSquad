package com.engenharia.squadcontroll.controller;

import com.engenharia.squadcontroll.entity.Client;
import com.engenharia.squadcontroll.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService ClientService;

    @GetMapping
    public List<Client> getAllClients() {
        return ClientService.getAllClients();
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable Long id) {
        return ClientService.getClientById(id)
                .orElseThrow(() -> new IllegalArgumentException("Client not found"));
    }

    @PostMapping
    public Client addClient(@RequestBody Client client) {
        return ClientService.addClient(client);
    }

    @PutMapping("/{id}")
    public Client updateClient(@PathVariable Long id, @RequestBody Client client) {
        return ClientService.updateClient(id, client);
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id) {
        ClientService.deleteClient(id);
    }
}