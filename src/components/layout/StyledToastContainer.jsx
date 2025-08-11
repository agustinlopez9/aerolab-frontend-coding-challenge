import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  }
  .Toastify__toast.Toastify__toast--success {
    border-radius: 0.75rem;
    border: 2px solid #29cc74;
    .Toastify__toast-icon {
      svg {
        fill: #29cc75;
      }
    }
  }
  .Toastify__toast.Toastify__toast--warning {
    border-radius: 0.75rem;
    border: 2px solid yellow;
  }
  .Toastify__toast.Toastify__toast--error {
    border-radius: 0.75rem;
    border: 2px solid #e07f4f;
    .Toastify__toast-icon {
      svg {
        fill: #e07f4f;
      }
    }
  }
  .Toastify__progress-bar {
    visibility: hidden;
  }
  .Toastify__close-button {
    align-self: center;
    color: #8fa3bf;
    opacity: 1;
    svg {
      height: 1.25rem;
      width: 1.125rem;
    }
  }
`;

export default StyledToastContainer;
