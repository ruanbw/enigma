import { LiteralId } from "./CompilerLiteralId";
import { OperatorCode } from "./CompilerOperatorCode";

type CompilerIR<T extends symbol, U extends object> = { symbol: T } & U;

export const labelSymbol: unique symbol = Symbol("label");
export const referenceSymbol: unique symbol = Symbol("reference");
export const opcodeSymbol: unique symbol = Symbol("opcode");
export const stringDataSymbol: unique symbol = Symbol("stringData");
export const numericalDataSymbol: unique symbol = Symbol("numericalData");

type Reference = { label: string };

export type OpcodeLike = OperatorCode | LiteralId;

export type IRLabel = CompilerIR<typeof labelSymbol, Reference>;
export type IRReference = CompilerIR<typeof referenceSymbol, Reference>;
export type IROpcode = CompilerIR<typeof opcodeSymbol, { opcodeLike: OpcodeLike }>;
export type IRStringData = CompilerIR<typeof stringDataSymbol, { data: string }>;
export type IRNumericalData = CompilerIR<typeof numericalDataSymbol, { data: number[] }>;

/**
 * Represents (any|all) intermediate representation.
 */
export type IR =
  | IRLabel
  | IRReference
  | IROpcode
  | IRStringData
  | IRNumericalData;