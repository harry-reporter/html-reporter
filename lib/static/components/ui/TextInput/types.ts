export interface TextInputProps {
  placeholred?: string;
  className?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
