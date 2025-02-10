import React, { useState } from 'react';

const GptSearchBar = () => {
    const [showBreakup, setShowBreakup] = useState(false);
    const [income, setIncome] = useState('');
    const [taxableIncome, setTaxableIncome] = useState('');
    const [tax, setTax] = useState('');
    const [taxBreakup, setTaxBreakup] = useState({
        tax0: '',
        tax1: '',
        tax2: '',
        tax3: '',
        tax4: '',
        tax5: '',
        tax6: '',
        total: ''
    });

    const calculateTax = () => {
        const incomeValue = parseFloat(income) || 0;
        const standardDeduction = 75000;
        const taxableIncomeValue = incomeValue - standardDeduction;

        let tax0 = 0, tax1 = 0, tax2 = 0, tax3 = 0, tax4 = 0, tax5 = 0, tax6 = 0;

        if (taxableIncomeValue <= 400000) {
            tax0 = 0;
        } else if (taxableIncomeValue <= 800000) {
            tax1 = (taxableIncomeValue - 400000) * 0.05;
        } else if (taxableIncomeValue <= 1200000) {
            tax1 = 20000;
            tax2 = (taxableIncomeValue - 800000) * 0.10;
        } else if (taxableIncomeValue <= 1600000) {
            tax1 = 20000;
            tax2 = 40000;
            tax3 = (taxableIncomeValue - 1200000) * 0.15;
        } else if (taxableIncomeValue <= 2000000) {
            tax1 = 20000;
            tax2 = 40000;
            tax3 = 60000;
            tax4 = (taxableIncomeValue - 1600000) * 0.20;
        } else if (taxableIncomeValue <= 2400000) {
            tax1 = 20000;
            tax2 = 40000;
            tax3 = 60000;
            tax4 = 80000;
            tax5 = (taxableIncomeValue - 2000000) * 0.25;
        } else {
            tax1 = 20000;
            tax2 = 40000;
            tax3 = 60000;
            tax4 = 80000;
            tax5 = 100000;
            tax6 = (taxableIncomeValue - 2400000) * 0.30;
        }

        const totalTax = tax0 + tax1 + tax2 + tax3 + tax4 + tax5 + tax6;

        setTax(totalTax.toFixed(2));
        setTaxableIncome(taxableIncomeValue.toFixed(2));
        setTaxBreakup({
            tax0: tax0.toFixed(2) || 'N/A',
            tax1: tax1.toFixed(2) || 'N/A',
            tax2: tax2.toFixed(2) || 'N/A',
            tax3: tax3.toFixed(2) || 'N/A',
            tax4: tax4.toFixed(2) || 'N/A',
            tax5: tax5.toFixed(2) || 'N/A',
            tax6: tax6.toFixed(2) || 'N/A',
            total: totalTax.toFixed(2) || 'N/A'
        });
    };

    const handleInfoCardClick = () => {
        setShowBreakup(true);
    };

    return (
        <div>
            <div className='pt-[35%] md:pt-[5%] flex justify-center'>
                <h1 className='absolute p-2 text-white'>New Tax Regime</h1>
                <form className='w-full md:w-1/2 bg-black grid grid-cols-1 md:grid-cols-3 gap-4 p-12' onSubmit={(e) => e.preventDefault()}>
                    <div className='col-span-1 md:col-span-3'>
                        <label htmlFor='income' className='block text-white text-sm'>Annual Income:</label>
                        <input
                            className='w-full p-2 my-2 bg-gray-700 text-xl'
                            type="text"
                            id='income'
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                        />
                    </div>
                   <div className='col-span-1 md:col-span-3'>
                        <label htmlFor='taxableIncome' className='block text-white text-sm'>Taxable Income After Standard Deduction:</label>
                        <input
                            className='w-full p-2 my-2 bg-gray-700 text-xl'
                            type="text"
                            id='taxableIncome'
                            value={taxableIncome}
                            readOnly
                        />
                    </div>
                    <div className='col-span-1 md:col-span-3'>
                        <label htmlFor="tax" className='block text-white text-sm'>Tax Payable:</label>
                        <input
                            className='w-full p-2 my-2 bg-gray-700 text-xl'
                            type="text"
                            id='tax'
                            value={tax}
                            readOnly
                        />
                        <h5 className='text-white text-sm'>87A Rebate till 60000</h5>
                    </div> 

                    
                    
                    <div className='flex justify-center align-middle'>
                    <div className=''>
                        <button type="submit" className='py-2 px-4 mx-4 my-2 bg-red-500 text-white rounded-lg text-sm' onClick={calculateTax}>
                            Calculate Tax
                        </button>
                    </div>
                    <div className=''>
                        <button type="submit" className='py-2 px-4 mx-4 my-2 bg-red-500 text-white rounded-lg text-sm' onClick={handleInfoCardClick}>
                            Break Up
                        </button>
                    </div>
                    </div>
                    
                </form>
            </div>
            {showBreakup && (
                <div className='pt-[35%] md:pt-[2%] flex justify-center'>
                    <h1 className='absolute p-2 text-white'>Tax calculation break up</h1>
                    <form className='w-full md:w-1/2 bg-black grid grid-cols-1 md:grid-cols-3 gap-4 p-12' onSubmit={(e) => e.preventDefault()}>
                        <div className='col-span-1 md:col-span-3'>
                            <label htmlFor='tax0' className='block text-white text-sm'>Upto 4 Lakh (No Tax):</label>
                            <input className='w-full p-2 my-2 bg-gray-700 text-xl' type="text" id='tax0' value={taxBreakup.tax0} readOnly />
                        </div>
                        <div className='col-span-1 md:col-span-3'>
                            <label htmlFor='tax1' className='block text-white text-sm'>4 Lakh to 8 Lakh (5%):</label>
                            <input className='w-full p-2 my-2 bg-gray-700 text-xl' type="text" id='tax1' value={taxBreakup.tax1} readOnly />
                        </div>
                        <div className='col-span-1 md:col-span-3'>
                            <label htmlFor='tax2' className='block text-white text-sm'>8 Lakh to 12 Lakh (10%):</label>
                            <input className='w-full p-2 my-2 bg-gray-700 text-xl' type="text" id='tax2' value={taxBreakup.tax2} readOnly />
                        </div>
                        <div className='col-span-1 md:col-span-3'>
                            <label htmlFor='tax3' className='block text-white text-sm'>12 Lakh to 16 Lakh (15%):</label>
                            <input className='w-full p-2 my-2 bg-gray-700 text-xl' type="text" id='tax3' value={taxBreakup.tax3} readOnly />
                        </div>
                        <div className='col-span-1 md:col-span-3'>
                            <label htmlFor='tax4' className='block text-white text-sm'>16 Lakh to 20 Lakh (20%):</label>
                            <input className='w-full p-2 my-2 bg-gray-700 text-xl' type="text" id='tax4' value={taxBreakup.tax4} readOnly />
                        </div>
                        <div className='col-span-1 md:col-span-3'>
                            <label htmlFor='tax5' className='block text-white text-sm'>20 Lakh to 24 Lakh (25%):</label>
                            <input className='w-full p-2 my-2 bg-gray-700 text-xl' type="text" id='tax5' value={taxBreakup.tax5} readOnly />
                        </div>
                        <div className='col-span-1 md:col-span-3'>
                            <label htmlFor='tax6' className='block text-white text-sm'>Above 24 Lakh (30%):</label>
                            <input className='w-full p-2 my-2 bg-gray-700 text-xl' type="text" id='tax6' value={taxBreakup.tax6} readOnly />
                        </div>
                        <div className='col-span-1 md:col-span-3'>
                            <label htmlFor='total' className='block text-white text-sm'>Total tax:</label>
                            <input className='w-full p-2 my-2 bg-gray-700 text-xl' type="text" id='total' value={taxBreakup.total} readOnly />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default GptSearchBar;