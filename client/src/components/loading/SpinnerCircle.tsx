interface Props {
  size?: number;
}

const SpinnerCircle = ({ size }: Props) => {
  return (
    <div
      className={`inline-block h-${size} w-${size} animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
      role="status"
    ></div>
  );
};

export default SpinnerCircle;
