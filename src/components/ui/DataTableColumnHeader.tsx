import { Column } from '@tanstack/react-table';

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
}: DataTableColumnHeaderProps<TData, TValue>) {
  return (
    <div>
      <span>{title}</span>
    </div>
  );
}
