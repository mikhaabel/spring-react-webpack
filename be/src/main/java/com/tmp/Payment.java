package com.tmp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@JsonIgnoreProperties(value = {"transactionId", "bookingDate", "valueDate", "typeDescription"})
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Payment {

    private String _type;
    private String currency;
    private String amount;
    private String creditorName;
    private String debtorName;

    public Payment() {
    }
}
