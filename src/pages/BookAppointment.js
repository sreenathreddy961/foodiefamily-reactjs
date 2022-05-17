import React, { useState } from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { send } from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/BookAppointment.css";
import ThankYou from "../assets/brandLogo_V1.1.jpg";
import Dialog from '@material-ui/core/Dialog';
import {useLocation} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
        width: 125,

    },
}));

function getSteps() {
    return [
        "Personal information",
        "Contact Information",
    ];
}

const ContactDetails = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="emailAddress"
                render={({ field }) => (
                    <TextField
                        id="emailAddress"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        required
                        type={"email"}
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                    <TextField
                        id="phoneNumber"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        required
                        type={"text"}
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="alternatePhone"
                render={({ field }) => (
                    <TextField
                        id="alternatePhone"
                        label="Alternate Phone"
                        variant="outlined"
                        placeholder="Enter Your Aalternate Phone"
                        fullWidth
                        type={"text"}
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
const PersonalInfo = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="fullName"
                render={({ field }) => (
                    <TextField
                        id="fullName"
                        label="Full Name"
                        variant="outlined"
                        placeholder="Enter Your Full Name"
                        fullWidth
                        required
                        type={"text"}
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="state"
                render={({ field }) => (
                    <TextField
                        id="state"
                        label="State"
                        variant="outlined"
                        placeholder="Enter Your State"
                        fullWidth
                        required
                        type={"text"}
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="preferedLanguage"
                render={({ field }) => (
                    <TextField
                        id="preferedLanguage"
                        label="Prefered Language"
                        variant="outlined"
                        placeholder="Enter Your Prefered Language"
                        fullWidth
                        required
                        type={"text"}
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="country"
                render={({ field }) => (
                    <TextField
                        id="country"
                        label="Country"
                        variant="outlined"
                        placeholder="Enter Your Country"
                        fullWidth
                        type={"text"}
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};

function getStepContent(step) {
    switch (step) {
        case 0:
            return < PersonalInfo />;
        case 1:
            return <ContactDetails />;
        default:
            return "unknown step";
    }
}

const BookAppointment = () => {
    const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            fullName: "",
            state: "",
            preferedLanguage: "",
            country: "",
            emailAddress: "",
            phoneNumber: "",
            alternatePhone: "",
        },

    });
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [openModal, setOpenModal] = useState(false);

    const handleNext = (data) => {
        setActiveStep(activeStep + 1);

        if (activeStep === steps.length - 1) {
            const name = data.fullName;
            const email = data.emailAddress;
            const mobileNumber = data.phoneNumber;
            const alternateMobileNumber = data.alternatePhone;
            const state = data.state;
            const country = data.country;
            const preferedLanguage = data.preferedLanguage;

            send(
                'service_zjg29zh',
                'template_lefyhjq',
                { name, email, mobileNumber, alternateMobileNumber, state, country, preferedLanguage },
                'kQU8XoKz1t8EpwFvC'
            ).then((response) => {
                toast.success("Succesfully booked appointment", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setOpenModal(true);
                data = "";
                console.log("Appointment booked successfully");
            }).catch((err) => {
                toast.error("Something went wrong", {
                    position: toast.POSITION.TOP_RIGHT
                });
                console.log("Failed to send email", err)
            })
            setActiveStep(activeStep - 1);
        }
    };

    const handleBack = () => { setActiveStep(activeStep - 1); };
    const handleClose = () => { setOpenModal(false); };

    const location = useLocation();

    return (
        <div>
            {activeStep !== steps.length ? (
                <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((step, index) => {
                        const labelProps = {};
                        const stepProps = {};

                        return (
                            <Step {...stepProps} key={index}>
                                <StepLabel {...labelProps}>{step}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            ) : (<></>)}

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                    {getStepContent(activeStep)}
                    <Button
                        className={classes.button}
                        disabled={activeStep === 0}
                        color="primary"
                        onClick={handleBack}
                    >
                        back
                    </Button>

                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        // onClick={handleNext}
                        type="submit"
                    >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </form>
            </FormProvider>
            <div>
                <ToastContainer />
                <Dialog open={openModal} onClose={handleClose}>
                    <Typography variant="h3" align="center" style={{ marginTop: "25px" }}>
                        <a href="/"><img src={ThankYou} alt="Thank You" height={250}></img></a><br></br>
                        Thank You
                    </Typography>
                </Dialog>

            </div>
        </div>
    );
};

export default BookAppointment;