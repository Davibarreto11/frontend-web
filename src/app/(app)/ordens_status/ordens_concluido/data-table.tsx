"use client";
import * as React from "react";

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
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableCaption,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

// Componente DataTable
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
  });
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filtro
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
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
        <Table className="">
          <TableHeader className="">
            <TableRow className="">
              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <TableCell key={header.id} className="font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="bg-white rounded-xl shadow-[0_0px_19px_-5px_rgba(0,0,0,0.10)] hover:bg-gray-100 transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="py-4" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <TableCell>
                  <Drawer>
                    {/* <FiMoreVertical size={20} /> */}
                    <DrawerTrigger> </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Cliente</DrawerTitle>
                        <hr></hr>
                        <DrawerDescription>
                          <Table className="mb-8">
                            <TableHeader>
                              <TableRow>
                                <TableHead className="w-[100px] font-bold">
                                  Nome
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  CPF
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  Telefone
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  E-mail
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="w-[100px]">
                                  Baraka
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  123.123.123-12
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  (88) 9 9912-1234
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  baraka@gmail.com
                                </TableCell>
                              </TableRow>

                              <TableRow>
                                <TableCell className="w-[100px]">
                                  Baraka
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  123.123.123-12
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  (88) 9 9912-1234
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  baraka@gmail.com
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>

                          <DrawerFooter>
                            <DropdownMenu>
                              <DropdownMenuTrigger className=" rounded-sm border h-10 bg-emerald-500 text-black">
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

                          <DrawerTitle>Aparelho</DrawerTitle>
                          <hr></hr>

                          <Table className="mb-8">
                            <TableHeader>
                              <TableRow className="">
                                <TableHead className="w-[100px] font-bold">
                                  Nome
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  Marca
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  Modelo
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  IMEI
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  N Série
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="w-[100px]">
                                  Galaxy S21 FE
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  Samsung
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  21314214241241224-1232
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  SM-SNGARMGJ
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  QQRWEWFEFDSFF
                                </TableCell>
                              </TableRow>

                              <TableRow>
                                <TableCell className="w-[100px]">
                                  Galaxy S21 FE
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  Samsung
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  21314214241241224-1232
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  SM-SNGARMGJ
                                </TableCell>
                                <TableCell className="w-[100px]">
                                  QQRWEWFEFDSFF
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <DrawerFooter>
                            <DropdownMenu>
                              <DropdownMenuTrigger className=" rounded-sm border h-10 bg-emerald-500 text-black">
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

                          <DrawerTitle>Defeitos</DrawerTitle>
                          <hr></hr>

                          <Table className="">
                            <TableHeader>
                              <TableRow>
                                <TableHead className="w-[100px] font-bold">
                                  Defeito
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  Peças
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  Observações
                                </TableHead>
                                <TableHead className="w-[100px] font-bold">
                                  Status
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="w-25">
                                  Caiu na água
                                </TableCell>
                                <TableCell className="w-25">
                                  Display, Báteria e Slot de carregamento
                                </TableCell>
                                <TableCell className="w-25">
                                  Senha do aparelho 1234, ficou durante todo o
                                  dia em baixo da água, display já trocado antes
                                </TableCell>
                                <TableCell className="w-25">
                                  Concluido
                                </TableCell>
                              </TableRow>

                              <TableRow>
                                <TableCell className="w-25">
                                  Caiu na água
                                </TableCell>
                                <TableCell className="w-30">
                                  Display, Báteria e Slot de carregamento
                                </TableCell>
                                <TableCell className="w-30">
                                  Senha do aparelho 1234, ficou durante todo o
                                  dia em baixo da água, display já trocado antes
                                </TableCell>
                                <TableCell className="w-25">
                                  Concluido
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>

                          <DrawerFooter>
                            <DropdownMenu>
                              <DropdownMenuTrigger className=" rounded-sm border h-10 bg-emerald-500 text-black">
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <Pagination>
          <PaginationContent className="ml-auto">
            <PaginationItem>
              <PaginationPrevious
                className="font-bold rounded border-solid border shadow-lg "
                href="#"
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                className="font-bold rounded border-solid border shadow-lg"
                href="#"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
