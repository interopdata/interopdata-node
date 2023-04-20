/**
 * Interopdata API
 * The Interopdata public API
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface CreateDataExportDto
 */
export interface CreateDataExportDto {
    /**
     * The list of slug of the datasets to export
     * @type {Array<string>}
     * @memberof CreateDataExportDto
     */
    datasets: Array<string>;
}
/**
 * Check if a given object implements the CreateDataExportDto interface.
 */
export declare function instanceOfCreateDataExportDto(value: object): boolean;
export declare function CreateDataExportDtoFromJSON(json: any): CreateDataExportDto;
export declare function CreateDataExportDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDataExportDto;
export declare function CreateDataExportDtoToJSON(value?: CreateDataExportDto | null): any;