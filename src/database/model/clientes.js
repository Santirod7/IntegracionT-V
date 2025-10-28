import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema(
    {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "ListOfComprobante",
  "type": "array",
  "items": {
    "$ref": "#/definitions/Comprobante"
  },
  "definitions": {
    "Comprobante": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "CodigoTipoComprobante": {
          "type": [
            "null",
            "string"
          ]
        },
        "NumeroComprobante": {
          "type": [
            "null",
            "string"
          ]
        },
        "FechaComprobante": {
          "type": "string",
          "format": "date-time"
        },
        "FechaCierreTesoreria": {
          "type": "string",
          "format": "date-time"
        },
        "FechaVtoCAE": {
          "type": "string",
          "format": "date-time"
        },
        "Items": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/ItemComprobante"
          }
        },
        "Pagos": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/Pago"
          }
        },
        "CodigoCondicionDeVenta": {
          "type": [
            "integer",
            "null"
          ]
        },
        "CuotasCuentaCorriente": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/CuotaCuentaCorriente"
          }
        },
        "CodigoListaPrecio": {
          "type": [
            "null",
            "string"
          ]
        },
        "Cotizacion": {
          "type": [
            "null",
            "number"
          ],
          "format": "decimal"
        },
        "CodigoCliente": {
          "type": [
            "null",
            "string"
          ]
        },
        "ClienteOcasional": {
          "oneOf": [
            {
              "type": "null"
            },
            {
              "$ref": "#/definitions/ClienteOcasional"
            }
          ]
        },
        "MailDestinatario": {
          "type": [
            "null",
            "string"
          ]
        },
        "IdDomicilioDeEntrega": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoDireccionEntrega": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoDeposito": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoVendedor": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoMotivo": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoAsiento": {
          "type": [
            "null",
            "string"
          ]
        },
        "EvitarGenerarAsiento": {
          "type": "boolean"
        },
        "Subtotal": {
          "type": "number",
          "format": "decimal"
        },
        "SubtotalSinImpuestos": {
          "type": "number",
          "format": "decimal"
        },
        "Total": {
          "type": "number",
          "format": "decimal"
        },
        "TotalMonedaExtranjera": {
          "type": [
            "null",
            "number"
          ],
          "format": "decimal"
        },
        "TotalExento": {
          "type": "number",
          "format": "decimal"
        },
        "TotalIva": {
          "type": "number",
          "format": "decimal"
        },
        "TotalSinImpuestos": {
          "type": "number",
          "format": "decimal"
        },
        "CodigoTalonario": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoTalonarioRemito": {
          "type": [
            "null",
            "string"
          ]
        },
        "Cae": {
          "type": [
            "null",
            "string"
          ]
        },
        "XmlTyp": {
          "type": [
            "null",
            "string"
          ]
        },
        "EstadoComprobanteElectronico": {
          "type": [
            "null",
            "string"
          ]
        },
        "EsMonedaExtranjera": {
          "type": "boolean"
        },
        "PagoMismaMonedaExtranjera": {
          "type": "boolean"
        },
        "CodigoFlete": {
          "type": [
            "null",
            "string"
          ]
        },
        "Leyenda1": {
          "type": [
            "null",
            "string"
          ]
        },
        "Leyenda2": {
          "type": [
            "null",
            "string"
          ]
        },
        "Leyenda3": {
          "type": [
            "null",
            "string"
          ]
        },
        "Leyenda4": {
          "type": [
            "null",
            "string"
          ]
        },
        "Leyenda5": {
          "type": [
            "null",
            "string"
          ]
        },
        "LeyendaCotizacion": {
          "type": [
            "null",
            "string"
          ]
        },
        "NumeroDeProyecto": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoOperacionRG3685": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoClasificacion": {
          "type": [
            "null",
            "string"
          ]
        },
        "Observaciones": {
          "type": [
            "null",
            "string"
          ]
        },
        "DescuentoPorcentaje": {
          "type": "number",
          "format": "decimal"
        },
        "DescuentoMonto": {
          "type": "number",
          "format": "decimal"
        },
        "DescuentoMontoSinIva": {
          "type": "number",
          "format": "decimal"
        },
        "RecargoPorcentaje": {
          "type": "number",
          "format": "decimal"
        },
        "RecargoMonto": {
          "type": "number",
          "format": "decimal"
        },
        "RecargoMontoSinIva": {
          "type": "number",
          "format": "decimal"
        },
        "RecargoFletePorcentaje": {
          "type": "number",
          "format": "decimal"
        },
        "RecargoFleteMonto": {
          "type": "number",
          "format": "decimal"
        },
        "RecargoFleteMontoSinIva": {
          "type": "number",
          "format": "decimal"
        },
        "InteresesPorcentaje": {
          "type": "number",
          "format": "decimal"
        },
        "InteresesMontoSinIva": {
          "type": "number",
          "format": "decimal"
        },
        "CodigoContracuenta": {
          "type": "integer",
          "format": "int64"
        },
        "LeyendaContracuenta": {
          "type": [
            "null",
            "string"
          ]
        },
        "ConceptoContracuenta": {
          "type": [
            "null",
            "string"
          ]
        },
        "Rg3971IdPaisReceptor": {
          "type": "integer",
          "format": "int32"
        },
        "Rg3971IdRelecionEmisorReceptor": {
          "type": "integer",
          "format": "int32"
        },
        "Rg3971CuitHotel": {
          "type": [
            "null",
            "string"
          ]
        },
        "Rg3971IdTipoFormaPagoTurismo": {
          "type": "integer",
          "format": "int32"
        },
        "Rg3971CodigoSwift": {
          "type": [
            "null",
            "string"
          ]
        },
        "Rg3971NumeroCuenta": {
          "type": [
            "null",
            "string"
          ]
        },
        "Rg3971NumeroTarjeta": {
          "type": [
            "null",
            "string"
          ]
        },
        "Rg3971IdTipoCuentaPagoTurismo": {
          "type": "integer",
          "format": "int32"
        },
        "Rg3668TipoIdentificacionFirmante": {
          "type": [
            "integer",
            "null"
          ],
          "format": "int32"
        },
        "Rg3668CaracterDelFirmante": {
          "type": [
            "integer",
            "null"
          ],
          "format": "int32"
        },
        "Rg3668CodigoIdentificacionFirmante": {
          "type": [
            "null",
            "string"
          ]
        },
        "Rg3668MotivoDeExcepcion": {
          "type": [
            "integer",
            "null"
          ],
          "format": "int32"
        },
        "Rg3668CodigoWeb": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoTipoComprobanteDeReferencia": {
          "type": [
            "null",
            "string"
          ]
        },
        "NumeroDeComprobanteDeReferencia": {
          "type": [
            "null",
            "string"
          ]
        },
        "ComprobanteCanceladoCompletamente": {
          "type": "boolean"
        },
        "CuitDestino": {
          "type": [
            "null",
            "string"
          ]
        },
        "TipoExpo": {
          "type": [
            "null",
            "string"
          ]
        },
        "PaisAfip": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoIncoterms": {
          "type": [
            "null",
            "string"
          ]
        },
        "DescripcionIncoterms": {
          "type": [
            "null",
            "string"
          ]
        },
        "PermisosEmbarque": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/PermisoEmbarque"
          }
        },
        "RemitosTabaco": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/RemitoTabaco"
          }
        },
        "CitiOpera": {
          "type": [
            "null",
            "string"
          ]
        },
        "CitiTipo": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    },
    "ItemComprobante": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "Codigo": {
          "type": [
            "null",
            "string"
          ]
        },
        "Descripcion": {
          "type": [
            "null",
            "string"
          ]
        },
        "DescripcionAdicional": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoTasaIva": {
          "type": [
            "integer",
            "null"
          ],
          "format": "int32"
        },
        "Cantidad": {
          "type": "number",
          "format": "decimal"
        },
        "Precio": {
          "type": [
            "null",
            "number"
          ],
          "format": "decimal"
        },
        "Bonificacion": {
          "type": [
            "null",
            "number"
          ],
          "format": "decimal"
        },
        "Importe": {
          "type": [
            "null",
            "number"
          ],
          "format": "decimal"
        },
        "ImporteSinImpuestos": {
          "type": [
            "null",
            "number"
          ],
          "format": "decimal"
        },
        "ImporteIva": {
          "type": [
            "null",
            "number"
          ],
          "format": "decimal"
        },
        "ImpuestoInterno": {
          "oneOf": [
            {
              "type": "null"
            },
            {
              "$ref": "#/definitions/ImpuestoInterno"
            }
          ]
        },
        "ImpuestoInternoAdicional": {
          "oneOf": [
            {
              "type": "null"
            },
            {
              "$ref": "#/definitions/ImpuestoInterno"
            }
          ]
        },
        "CodigoUM": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoDeposito": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoClasificacion": {
          "type": [
            "null",
            "string"
          ]
        },
        "DescargaStock": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "Percepciones": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/Percepcion"
          }
        },
        "Partidas": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/Partida"
          }
        },
        "Componentes": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/ItemComprobante"
          }
        },
        "Observaciones": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    },
    "ImpuestoInterno": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "Codigo": {
          "type": "integer"
        },
        "Porcentaje": {
          "type": "number",
          "format": "decimal"
        },
        "Importe": {
          "type": "number",
          "format": "decimal"
        }
      }
    },
    "Percepcion": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "CodigoAlicuota": {
          "type": "integer"
        },
        "CodigoPercepcion": {
          "type": [
            "null",
            "string"
          ]
        },
        "Porcentaje": {
          "type": "number",
          "format": "decimal"
        },
        "Base": {
          "type": "number",
          "format": "decimal"
        },
        "Importe": {
          "type": "number",
          "format": "decimal"
        }
      }
    },
    "Partida": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "Numero": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoArticulo": {
          "type": [
            "null",
            "string"
          ]
        },
        "Cantidad": {
          "type": "integer",
          "format": "int64"
        },
        "Series": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/Serie"
          }
        }
      }
    },
    "Serie": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "Numero": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    },
    "Pago": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "Tipo": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoDeCuenta": {
          "type": [
            "null",
            "string"
          ]
        },
        "DescuentoPorcentaje": {
          "type": "number",
          "format": "decimal"
        },
        "RecargoPorcentaje": {
          "type": "number",
          "format": "decimal"
        },
        "Monto": {
          "type": "number",
          "format": "decimal"
        },
        "Leyenda": {
          "type": [
            "null",
            "string"
          ]
        },
        "Fecha": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "CuotaCuentaCorriente": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "FechaVencimiento": {
          "type": "string",
          "format": "date-time"
        },
        "Importe": {
          "type": "number",
          "format": "decimal"
        }
      }
    },
    "ClienteOcasional": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "CodigoAlicuotaAdicional": {
          "type": "integer"
        },
        "CodigoAlicuotaFija": {
          "type": "integer"
        },
        "CodigoClasificacion": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoPostal": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoPostalEntrega": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoProvincia": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoProvinciaEntrega": {
          "type": [
            "null",
            "string"
          ]
        },
        "ConsideraIVAEnBaseDeCalculoIIBB": {
          "type": "boolean"
        },
        "ConsideraIVAEnBaseDeCalculoIIBBAdic": {
          "type": "boolean"
        },
        "DiscriminaIva": {
          "type": "boolean"
        },
        "Documento": {
          "type": [
            "null",
            "string"
          ]
        },
        "Domicilio": {
          "type": [
            "null",
            "string"
          ]
        },
        "DomicilioEntrega": {
          "type": [
            "null",
            "string"
          ]
        },
        "LiquidaIva": {
          "type": "boolean"
        },
        "LiquidaPercepcionesDeImpuestosInternos": {
          "type": "boolean"
        },
        "Localidad": {
          "type": [
            "null",
            "string"
          ]
        },
        "LocalidadEntrega": {
          "type": [
            "null",
            "string"
          ]
        },
        "Mail": {
          "type": [
            "null",
            "string"
          ]
        },
        "MailDestinatario": {
          "type": [
            "null",
            "string"
          ]
        },
        "PaisEntrega": {
          "type": [
            "null",
            "string"
          ]
        },
        "PercepcionesDefinibles": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/PercepcionDefinible"
          }
        },
        "PorcentajeExcluidoPercepcionIVA": {
          "type": "number",
          "format": "decimal"
        },
        "Responsabilidad": {
          "type": "integer",
          "format": "int32"
        },
        "RazonSocial": {
          "type": [
            "null",
            "string"
          ]
        },
        "Sexo": {
          "type": [
            "null",
            "string"
          ]
        },
        "Telefono": {
          "type": [
            "null",
            "string"
          ]
        },
        "TelefonoEntrega": {
          "type": [
            "null",
            "string"
          ]
        },
        "TipoDocumento": {
          "type": "integer",
          "format": "int32"
        },
        "UsaIngresosBrutos": {
          "type": "boolean"
        },
        "UsaPercepcionesDeIVA": {
          "type": "boolean"
        }
      }
    },
    "PercepcionDefinible": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "CodigoPercepcion": {
          "type": [
            "null",
            "string"
          ]
        },
        "CodigoAlicuota": {
          "type": "integer"
        },
        "TipoPercepcion": {
          "type": "integer",
          "format": "int32"
        },
        "Descripcion": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    },
    "PermisoEmbarque": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "CodigoDespacho": {
          "type": [
            "null",
            "string"
          ]
        },
        "PaisAfip": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    },
    "RemitoTabaco": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "TipoRemito": {
          "type": [
            "null",
            "string"
          ]
        },
        "NumeroComprobante": {
          "type": [
            "null",
            "string"
          ]
        },
        "CuitRemito": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    }
  }
}
)

 const Clientes = mongoose.model('clientes', clienteSchema);
 export default Clientes;