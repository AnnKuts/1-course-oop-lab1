import { useState } from 'react';
import ModalWindow from './ModalWindow';
import Button from './Button';
import Slider from './Slider';

export const SliderDialog = ({ onResult }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sliderValue, setSliderValue] = useState(1);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSliderValue(1);
    };

    const handleSliderChange = (e) => {
        setSliderValue(Number(e.target.value));
    };

    const handleOk = () => {
        if (onResult) {
            onResult(sliderValue);
        }
        closeModal();
    };

    const handleCancel = () => {
        closeModal();
    };

    return (
        <div className="dialog-component">
            <Button onClick={openModal}>
                SliderDialog
            </Button>

            <ModalWindow
                isOpen={isModalOpen}
                onClose={handleCancel}
                title="Slider Dialog"
            >
                <div className="modal-content-padding">
                    <div className="slider-group">
                        <label className="input-label">
                            Move to select a value:
                        </label>
                        <div className="input-group">
                            <Slider
                                min={1}
                                max={100}
                                value={sliderValue}
                                onChange={handleSliderChange}
                                step={1}
                                className="main-slider"
                            />
                        </div>
                        <div className="slider-value">
                            {sliderValue}
                        </div>
                    </div>

                    <div className="button-group-right">
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