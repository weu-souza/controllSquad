package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.Squad;

import java.util.Date;

    public class SquadDTO {
        private long id;
        private String celular;
        private String email;
        private Date inicioContrato;
        private String nomeGestor;
        private String squad;
        private Date terminoContrato;

        public SquadDTO() {
        }
        public SquadDTO(Squad entity) {
            this.id = entity.getId();
            this.celular = entity.getCelular();
            this.email = entity.getEmail();
            this.inicioContrato = entity.getInicioContrato();
            this.nomeGestor = entity.getNomeGestor();
            this.squad = entity.getSquad();
            this.terminoContrato = entity.getTerminoContrato();
        }

        public SquadDTO(long id, String celular, String email, Date inicioContrato, String nomeGestor, String squad, Date terminoContrato) {
            this.id = id;
            this.celular = celular;
            this.email = email;
            this.inicioContrato = inicioContrato;
            this.nomeGestor = nomeGestor;
            this.squad = squad;
            this.terminoContrato = terminoContrato;
        }

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public String getCelular() {
            return celular;
        }

        public void setCelular(String celular) {
            this.celular = celular;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public Date getInicioContrato() {
            return inicioContrato;
        }

        public void setInicioContrato(Date inicioContrato) {
            this.inicioContrato = inicioContrato;
        }

        public String getNomeGestor() {
            return nomeGestor;
        }

        public void setNomeGestor(String nomeGestor) {
            this.nomeGestor = nomeGestor;
        }

        public String getSquad() {
            return squad;
        }

        public void setSquad(String squad) {
            this.squad = squad;
        }

        public Date getTerminoContrato() {
            return terminoContrato;
        }

        public void setTerminoContrato(Date terminoContrato) {
            this.terminoContrato = terminoContrato;
        }
    }


