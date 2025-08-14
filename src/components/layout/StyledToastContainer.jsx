import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { palette } from "components/theme/palette";

const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  @media (min-width: 1024px) {
    .Toastify__toast {
      width: 532px;
    }
  }
  .Toastify__toast-body {
    text-align: left;
    font-weight: 600;
    font-size: 1.125rem;
    color: #8fa3bf;
    p {
      padding-bottom: 0.25rem;
    }
  }
  .Toastify__toast-icon {
    margin-left: 1.5rem;
    margin-right: 1rem;
  }
  .Toastify__toast.Toastify__toast--success {
    border-radius: 0.75rem;
    border: 2px solid ${palette.success};
  }
  .Toastify__toast.Toastify__toast--warning {
    border-radius: 0.75rem;
    border: 2px solid yellow;
  }
  .Toastify__toast.Toastify__toast--error {
    border-radius: 0.75rem;
    border: 2px solid ${palette.error};
  }
  .Toastify__progress-bar {
    visibility: hidden;
  }
  .Toastify__close-button {
    align-self: center;
    color: #8fa3bf;
    opacity: 1;
    margin-top: 0.25rem;
    margin-right: 1.5rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export default StyledToastContainer;
