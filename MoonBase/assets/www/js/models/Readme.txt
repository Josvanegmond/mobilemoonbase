First draft of required models (not complete yet). Feel free to modify the classes.

Description:
1. Resource: Material and Device come under Resource. It has launch mass and price.
2. Power Source: Provides power
3. Power Grid: Takes power from power sources and supplies it to consumers (plants, vehicles etc.)
4. Plant: A plant has devices, materials and power. If the required devices, materials and power are fulfilled, it can produce resources (devices and materials). However, it cannot use those resources unless allocated by manager
 (I think producer or manufacturer or factory would be a better name for this class?)
5. Manager: It tries to assign power to inactive powerConsumers. It collects manufactured devices/materials and stores it in a queue. It adds new powerSources to power grid.