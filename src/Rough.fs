namespace ButtonSmash

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.Import.Browser

module Roughjs =
    type Point = int * int

    [<StringEnum>]
    type OpType =
        | Move
        | BcurveTo
        | LineTo
        | QcurveTo

    [<StringEnum>]
    type OpSetType =
        | Path
        | FillPath
        | FillSketch
        | Path2Dfill
        | Path2Dpattern

    type Op =
        abstract op: OpType
        abstract data: int[]

    type OpSet =
        abstract ``type``: OpSetType
        abstract ops: Op[]
        abstract size: Point
        abstract path: string

    type IOptions =
        abstract maxRandomnessOffset: int with get, set
        abstract roughness: int with get, set
        abstract bowing: int with get, set
        abstract stroke: string with get, set
        abstract strokeWidth: int with get, set
        abstract curveTightness: int with get, set
        abstract curveStepCount: int with get, set
        abstract fill: string with get, set
        abstract fillStyle: string with get, set
        abstract fillWeight: int with get, set
        abstract hachureAngle: int with get, set
        abstract hachureGap: int with get, set
        abstract simplification: int with get, set

    type Drawable =
        abstract shape: string
        abstract options: IOptions
        abstract sets: OpSet[]

    type IConfig =
        abstract async: bool with get,set
        abstract options: IOptions  with get,set
        abstract noWorker: bool with get,set
        abstract worklyURL: string with get,set

    type ICanvas =
        abstract rectangle: x: int * y: int * width: int * height: int * ?options: IOptions -> Drawable
        abstract line: x1: int * y1: int * x2: int * y2: int * ?options: IOptions -> Drawable
        abstract ellipse: x: int * y: int * width: int * height: int * ?options: IOptions -> Drawable
        abstract circle: x: int * y: int * diameter: int * ?options: IOptions -> Drawable
        abstract canvas: HTMLCanvasElement with get, set

    type IRough =
        abstract canvas : HTMLCanvasElement -> Option<IConfig> -> ICanvas


    let Rough: IRough = importDefault "roughjs"

    let RoughCanvas (canvas: HTMLCanvasElement) (config: Option<IConfig>): ICanvas =
        Rough.canvas canvas config







