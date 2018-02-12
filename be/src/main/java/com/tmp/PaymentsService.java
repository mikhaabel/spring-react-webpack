package com.tmp;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentsService {

    private List<Payment> paymentList;

    public void save(List<Payment> paymentList) {
        this.paymentList = paymentList;
    }

    public Iterable<Payment> list() {
        return paymentList;
    }

}
