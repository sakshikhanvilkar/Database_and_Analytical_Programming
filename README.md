# Database_and_Analytical_Programming
The project aimed to analyze the growth of electric vehicles (EVs) and the availability of charging stations, considering their crucial role in sustainable transportation. With increasing concerns about environmental impact, understanding the EV market's dynamics and infrastructure needs becomes essential.

**Data Collection:** Two primary datasets were utilized - one containing information on EV population and the other on charging stations in the United States. These datasets provided insights into the types of vehicles in the market, energy consumption, charging times, and the distribution of charging infrastructure.

**MongoDB for Data Storage:** MongoDB, a NoSQL database, was utilized for its flexibility in handling structured and unstructured data. The data from the EV population and charging station datasets were imported into MongoDB collections named "ev_vehicle_population" and "ev_charging_station" respectively.

**ETL (Extract, Transform, Load):
**
Extraction: Data was extracted from JSON and CSV files and imported into Python using Pandas and PyMongo.
Transformation: The data underwent cleaning and preprocessing to ensure it was suitable for analysis. For example, zip codes were standardized, and irrelevant columns were filtered out.
Loading: The cleaned data was then loaded into the MongoDB database for further analysis.
**PostgreSQL for Data Analysis:** PostgreSQL was chosen as the database platform for its reliability and robust querying capabilities. Data from the MongoDB collections was loaded into PostgreSQL tables for visualization and analysis.

**Visualization:** Various visualization libraries such as Bokeh, Graphviz, and Matplotlib were employed to present the insights derived from the data. Visualizations included maps showing the distribution of EVs and charging stations, line graphs illustrating vehicle production trends, and pie charts representing payment modes at charging stations.


**Note**: This research endeavor was undertaken by TeamN, comprising two group members - Sakshi/ Sughanda.
