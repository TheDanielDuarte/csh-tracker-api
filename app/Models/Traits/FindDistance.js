'use strict'

class FindDistance {
  register (Model, customOptions = {}) {
    const defaultOptions = {}
    const options = Object.assign(defaultOptions, customOptions)

    Model.prototype.findDistanceFromClient = function(clientCoordinates) {
      const institutionCoordinates = { lat: this._toRadians(this.latitude), lgt: this._toRadians(this.longitude) }
      const earthRadius = 3960.539201; // Distance from the Earth's center to Miam
      
      return 2 * earthRadius * Math.asin( Math.sqrt( this._haversine(clientCoordinates.latitude - institutionCoordinates.lat) +
        Math.cos(clientCoordinates.latitude) * Math.cos(institutionCoordinates.lat) * this._haversine(clientCoordinates.longitude - institutionCoordinates.lgt) ) )    
    }
  
    Model.prototype._toRadians = function(angleInDegrees) {
      return (angleInDegrees) * (Math.PI/180)
    }
    
    Model.prototype._haversine = function(angle) {
      const halfAngle = Math.sin(angle/2)
      return Math.pow(halfAngle, 2)
    }
  }
}

module.exports = FindDistance
