import  { useState } from 'react'
import InputDialog from './components/InputDialog'
import SliderDialog from './components/SliderDialog'

function Lab1() {
    const [selectedDialog, setSelectedDialog] = useState('');
    const [inputDialogResult, setInputDialogResult] = useState('');
    const [sliderDialogResult, setSliderDialogResult] = useState('');

    const handleSelectChange = (e) => {
        setSelectedDialog(e.target.value);
    };

    const handleInputDialogResult = (result) => {
        setInputDialogResult(result);
    };

    const handleSliderDialogResult = (result) => {
        setSliderDialogResult(result);
    };

    const renderSelectedDialog = () => (
        <>
            {selectedDialog === 'input' && <InputDialog onResult={handleInputDialogResult} />}
            {selectedDialog === 'slider' && <SliderDialog onResult={handleSliderDialogResult} />}
        </>
    );

    const hasResults = inputDialogResult || sliderDialogResult;

    return (
        <div className="lab1-container">
            <h1 className="lab1-title">Lab1</h1>

            <div className="select-container">
                <select
                    value={selectedDialog}
                    onChange={handleSelectChange}
                    className="dialog-select"
                >
                    <option value="">Choose work1 or work2</option>
                    <option value="slider">work1</option>
                    <option value="input">work2</option>
                </select>
            </div>

            <div className="dialog-display">
                {renderSelectedDialog()}
            </div>

            {hasResults && (
                <div className="results-section">
                    <table className="results-table">
                        <tbody>
                        {sliderDialogResult && inputDialogResult && (
                            <tr>
                                <td className="value-cell">{sliderDialogResult}</td>
                                <td className="name-cell">{inputDialogResult}</td>
                            </tr>
                        )}
                        {sliderDialogResult && !inputDialogResult && (
                            <tr>
                                <td className="value-cell">{sliderDialogResult}</td>
                                <td className="name-cell">-</td>
                            </tr>
                        )}
                        {!sliderDialogResult && inputDialogResult && (
                            <tr>
                                <td className="value-cell">-</td>
                                <td className="name-cell">{inputDialogResult}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Lab1