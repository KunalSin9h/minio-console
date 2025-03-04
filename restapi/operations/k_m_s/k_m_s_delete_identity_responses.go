// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package k_m_s

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// KMSDeleteIdentityOKCode is the HTTP code returned for type KMSDeleteIdentityOK
const KMSDeleteIdentityOKCode int = 200

/*
KMSDeleteIdentityOK A successful response.

swagger:response kMSDeleteIdentityOK
*/
type KMSDeleteIdentityOK struct {
}

// NewKMSDeleteIdentityOK creates KMSDeleteIdentityOK with default headers values
func NewKMSDeleteIdentityOK() *KMSDeleteIdentityOK {

	return &KMSDeleteIdentityOK{}
}

// WriteResponse to the client
func (o *KMSDeleteIdentityOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

/*
KMSDeleteIdentityDefault Generic error response.

swagger:response kMSDeleteIdentityDefault
*/
type KMSDeleteIdentityDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewKMSDeleteIdentityDefault creates KMSDeleteIdentityDefault with default headers values
func NewKMSDeleteIdentityDefault(code int) *KMSDeleteIdentityDefault {
	if code <= 0 {
		code = 500
	}

	return &KMSDeleteIdentityDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the k m s delete identity default response
func (o *KMSDeleteIdentityDefault) WithStatusCode(code int) *KMSDeleteIdentityDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the k m s delete identity default response
func (o *KMSDeleteIdentityDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the k m s delete identity default response
func (o *KMSDeleteIdentityDefault) WithPayload(payload *models.Error) *KMSDeleteIdentityDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the k m s delete identity default response
func (o *KMSDeleteIdentityDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *KMSDeleteIdentityDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
