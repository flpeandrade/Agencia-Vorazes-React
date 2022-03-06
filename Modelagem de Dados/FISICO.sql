

CREATE TABLE Cliente (
Id_Cliente Int PRIMARY KEY,
Nome VarChar(30) NOT NULL,
CPF VarChar(30) NOT NULL,
Endereço VarChar(30) NOT NULL,
TelCliente VarChar(30) NOT NULL
)

CREATE TABLE Destinos (
Id_Destinos Int PRIMARY KEY,
Preço float NOT NULL,
Destino VarChar(30) NOT NULL, 
DataIda datetime NOT NULL,
DataVolta datetime NOT NULL
)

CREATE TABLE Vendedor (
Id_Vendedor Int PRIMARY KEY,
NomeVendedor VarChar(30) NOT NULL,
TelVendedor VarChar(30) NOT NULL,
Matricula Int NOT NULL
)

CREATE TABLE Compra (
Id_compra Int PRIMARY KEY,
Id_Destinos Int,
Id_Vendedor Int,
Id_Cliente Int,
FOREIGN KEY(Id_Destinos) REFERENCES Destinos (Id_Destinos),
FOREIGN KEY(Id_Vendedor) REFERENCES Vendedor (Id_Vendedor),
FOREIGN KEY(Id_Cliente) REFERENCES Cliente (Id_Cliente)
)

