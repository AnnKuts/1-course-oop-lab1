import { useState } from 'react';
import ModalWindow from './ModalWindow';
import Button from './Button';
import Input from './Input';

const InputDialog = ({ onResult }) => {
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const openFirstModal = () => {
        setIsFirstModalOpen(true);
    };

    const handleNext = () => {
        if (inputValue.trim()) {
            setIsFirstModalOpen(false);
            setIsSecondModalOpen(true);
        }
    };

    const handleBack = () => {
        setIsSecondModalOpen(false);
        setIsFirstModalOpen(true);
    };

    const handleCancel = () => {
        setIsFirstModalOpen(false);
        setIsSecondModalOpen(false);
        setInputValue('');
    };

    const handleOk = () => {
        setIsSecondModalOpen(false);
        if (onResult) {
            onResult(inputValue);
        }
        setInputValue('');
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="dialog-component">
            <Button onClick={openFirstModal}>
                InputDialog
            </Button>

            <ModalWindow
                isOpen={isFirstModalOpen}
                onClose={handleCancel}
                title="Step 1"
            >
                <div className="modal-content-padding">
                    <div className="input-group">
                        <label className="input-label">
                            Input your text:
                        </label>
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Input your text here"
                            className="input-dialog-field"
                        />
                    </div>

                    <div className="button-group-right">
                        <Button onClick={handleNext}>
                            Next
                        </Button>
                        <Button onClick={handleCancel} className="secondary">
                            Cancel
                        </Button>
                    </div>
                </div>
            </ModalWindow>

            <ModalWindow
                isOpen={isSecondModalOpen}
                onClose={handleCancel}
                title="Step 2"
            >
                <div className="modal-content-padding">
                    <div className="confirmation-section">
                        <p>Confirm your data</p>
                        <div className="data-preview">
                            <strong>{inputValue}</strong>
                        </div>
                    </div>

                    <div className="button-group-right">
                        <Button onClick={handleBack} className="secondary">
                            &lt; Back
                        </Button>
                        <Button onClick={handleOk}>
                            Yes
                        </Button>
                        <Button onClick={handleCancel} className="secondary">
                            Cancel
                        </Button>
                    </div>
                </div>
            </ModalWindow>
        </div>
    );
};

export default InputDialog;