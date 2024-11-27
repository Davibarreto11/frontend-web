"use client"

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardWithForm() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="flex-wrap justify-center items-center mt-7">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Sintoma</Label>
                <Input id="description" placeholder="Descrição do projeto" />
              </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Peças</Label>
                <Input id="description" placeholder="Descrição do projeto" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Staus</Label>
                <Input id="description" placeholder="Descrição do projeto" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Comentário</Label>
                <Input id="description" placeholder="Descrição do projeto" />
              </div>
              {/* Campo de anexo */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="file">Anexo</Label>
                <Input
                  className="hover-b"
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf" // Tipos de arquivos aceitos
                />
                {selectedFile && (
                  <span className=" text-sm text-gray-500 mt-2">
                    Arquivo selecionado: {selectedFile.name}
                  </span>
                )}
              </div>

              {/* Outros campos */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="budget">Orçamento</Label>
                <Input id="budget" placeholder="Orçamento do projeto" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancelar</Button>
          <Button>Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
