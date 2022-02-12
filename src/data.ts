/*
 * Copyright 2022 Nadia Idris All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type Currency = "USD" | "EUR" | "GBP" | "CAD"

interface BaseUSD {
  USD: Partial<{ [P in Currency]: number }>
}

interface BaseEUR {
  EUR: Partial<Record<Currency, number>>
}

interface BaseGBP {
  GBP: Partial<Record<Currency, number>>
}

interface BaseCAD {
  CAD: Partial<Record<Currency, number>>
}

export type BaseCurrency = BaseUSD | BaseEUR | BaseGBP | BaseCAD

export const mockUSDData: BaseUSD = {
  USD: {
    EUR: 0.88,
    GBP: 0.74,
    CAD: 1.27,
  }
}
export const mockEURData: BaseEUR = {
  EUR: {
    USD: 1.13,
    GBP: 0.84,
    CAD: 1.45,
  }
}
export const mockGBPData: BaseGBP = {
  GBP: {
    USD: 1.35,
    EUR: 1.20,
    CAD: 1.72,
  }
}
export const mockCADData: BaseCAD = {
  CAD: {
    USD: 0.79,
    EUR: 0.69,
    GBP: 0.58,
  }
}