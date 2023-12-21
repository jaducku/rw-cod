"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState, ChangeEvent } from 'react';

type AcceleratorInputs = {
    '1Min': number; '5Min':number; '10Min': number; '15Min':number; '30Min': number;
    '1Hour': number; '3Hour':number; '8Hour': number; '15Hour':number; '24Hour': number;
};

export default function AcceleratorCalculator(){
    const [inputs, setInputs] = useState<AcceleratorInputs>({
        '1Min': 0, '5Min': 0, '10Min': 0, '15Min': 0, '30Min': 0,
        '1Hour': 0, '3Hour': 0, '8Hour': 0, '15Hour': 0, '24Hour': 0
    });

    const [totalMinutes, setTotalMinutes] = useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(prevState => ({...prevState, [name]: Number(value)}));
        calculateTotal();
    };

    const calculateTotal = () => {
        const minutes = inputs['1Min'] + inputs['5Min']*5 + inputs['10Min']*10 + inputs['15Min']*15 + inputs['30Min']*30 +
                        inputs['1Hour']*60 + inputs['3Hour']*180 + inputs['8Hour']*480 + inputs['15Hour']*900 + inputs['24Hour']*1440;
        setTotalMinutes(minutes);
    }

    return (
        <div>
            <h1>가속계산기</h1>
            {Object.keys(inputs).map(key =>(
                <div key={key}>
                    <Label>{key}:</Label>
                    <Input type='number' name={key} value={inputs[key as keyof AcceleratorInputs]} onChange={handleChange}/>
                </div>
            ))}
            <h2>총 분 : {totalMinutes}</h2>
            <h2>총 일수 : {(totalMinutes/1440).toFixed(2)}</h2>
        </div>
    );
};
