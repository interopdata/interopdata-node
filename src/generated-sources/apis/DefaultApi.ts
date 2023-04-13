/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import type {
  CreateCustomerDto,
  Customer,
  Dataset,
} from '../models';
import {
    CreateCustomerDtoFromJSON,
    CreateCustomerDtoToJSON,
    CustomerFromJSON,
    CustomerToJSON,
    DatasetFromJSON,
    DatasetToJSON,
} from '../models';

export interface CreateCustomerRequest {
    createCustomerDto: CreateCustomerDto;
}

export interface CustomersListRequest {
    createCustomerDto: CreateCustomerDto;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async createCustomerRaw(requestParameters: CreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters.createCustomerDto === null || requestParameters.createCustomerDto === undefined) {
            throw new runtime.RequiredError('createCustomerDto','Required parameter requestParameters.createCustomerDto was null or undefined when calling createCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("project-secret", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/customers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCustomerDtoToJSON(requestParameters.createCustomerDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     */
    async createCustomer(requestParameters: CreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.createCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async customersListRaw(requestParameters: CustomersListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Customer>>> {
        if (requestParameters.createCustomerDto === null || requestParameters.createCustomerDto === undefined) {
            throw new runtime.RequiredError('createCustomerDto','Required parameter requestParameters.createCustomerDto was null or undefined when calling customersList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("project-secret", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCustomerDtoToJSON(requestParameters.createCustomerDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CustomerFromJSON));
    }

    /**
     */
    async customersList(requestParameters: CustomersListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Customer>> {
        const response = await this.customersListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async datasetsListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Dataset>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("project-secret", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/datasets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatasetFromJSON));
    }

    /**
     */
    async datasetsList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Dataset>> {
        const response = await this.datasetsListRaw(initOverrides);
        return await response.value();
    }

}
