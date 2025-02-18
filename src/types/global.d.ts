interface SpinnerControl {
  showLoading: () => void;
  hideLoading: () => void;
}

interface SpinnerButtons {
  [key: string]: SpinnerControl;
}

interface Window {
  spinnerButtons: SpinnerButtons;
} 