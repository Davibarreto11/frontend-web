"use client"
import * as React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableCaption,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { FiMoreVertical } from 'react-icons/fi';

type Checked = DropdownMenuCheckboxItemProps["checked"]

type Status = "Em andamento" | "Pendente" | "Reparo concluido" | "Peça em trânsito" | "Orçamento aprovado" | "Orçamento reprovado" | "Pedido Entregue";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

// Componente DataTable
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  // A variável statusFilter precisa ser inicializada como string ou undefined
  const statusFilter = table.getColumn("status")?.getFilterValue() as string | undefined;

  return (
    <div>
      <div className="flex items-center py-4 space-x-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        {/* Filtro de Status */}
        <select
  className="max-w-sm"
  onChange={(e) => table.getColumn("status")?.setFilterValue(e.target.value || undefined)}
  value={statusFilter || ""} 
>
  <option value="">Filtrar por Status</option>
  <option value="Em andamento">Em andamento</option>
  <option value="Pendente">Pendente</option>
  <option value="Reparo concluido">Reparo concluido</option>
  <option value="Peça em trânsito">Peça em trânsito</option>
  <option value="Orçamento aprovado">Orçamento aprovado</option>
  <option value="Orçamento reprovado">Orçamento reprovado</option>
  <option value="Pedido Entregue">Pedido Entregue</option>
</select>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filtro
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border mt-4 ">
        <Table>
          <TableHeader>
            <TableRow>
              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <TableCell key={header.id} className="font-semibold">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="py-4" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <TableCell>
                  <Drawer>
                    <DrawerTrigger> <FiMoreVertical size={20} /> </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Cliente</DrawerTitle>
                        <hr />
                        <DrawerDescription>
                          <Table className="mb-8">
                            <TableHeader>
                              <TableRow>
                                <TableHead className="w-[100px] font-bold">Nome</TableHead>
                                <TableHead className="w-[100px] font-bold">CPF</TableHead>
                                <TableHead className="w-[100px] font-bold">Telefone</TableHead>
                                <TableHead className="w-[100px] font-bold">E-mail</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="w-[100px]">Baraka</TableCell>
                                <TableCell className="w-[100px]">123.123.123-12</TableCell>
                                <TableCell className="w-[100px]">(88) 9 9912-1234</TableCell>
                                <TableCell className="w-[100px]">baraka@gmail.com</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <DrawerFooter>
                            <DropdownMenu>
                              <DropdownMenuTrigger className="rounded-sm border h-10 bg-emerald-500 text-black">
                                Open
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                <DropdownMenuItem>Deletar</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </DrawerFooter>
                        </DrawerDescription>
                      </DrawerHeader>
                    </DrawerContent>
                  </Drawer>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Pagination>
          <PaginationContent className="ml-auto">
          <PaginationItem>
  <PaginationPrevious
    className="font-bold rounded border-solid border shadow-lg"
    onClick={() => table.previousPage()}
    isActive={table.getCanPreviousPage()} // Use `isActive` instead of `disabled`
  />
</PaginationItem>

<PaginationItem>
  <PaginationNext
    className="font-bold rounded border-solid border shadow-lg"
    onClick={() => table.nextPage()}
    isActive={table.getCanNextPage()} // Same here
  />
</PaginationItem>

          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
