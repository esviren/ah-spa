import type { Modelos } from "~/types/modelos"
import {productB} from '~/data/models-es.json'

export const useModeloData = () => {
    // Simula una función para cargar datos desde un JSON
    const loadModelos = async (): Promise<Modelos[] | null>  => {
      // Puedes reemplazar esto con $fetch o importación de JSON
      retur productB
    }
  
    return { loadModelos, useModeloData }
  }