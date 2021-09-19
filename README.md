## Open Source Spectrometry for Water Quality Analysis

This respository will be used to collect information to support the development of a low-cost spectrometry solution for water quality analysis. 

### Requirements 
We want to be able to perform common water quality analysis tests, in approximate order of priority: 
- pH
- Ammonia
- Nitrate
- Nitrite
- CO2 
- Fe

Some of these tests are more difficult than others. Ideally, we would be able to minimize auxiliary steps (adding reagents, mixing powders, etc.) and get by with just spectral analysis for most of these tests. I don't yet have a good idea of what can be done without a colorimetric reagent, but it does seem like all of these tests are possible with the addition of known colorimetric reagents. 

### Precedents 
- Some of the writeups on Public Lab are pretty sophisticated, like the [detection of added sugar in red wine](https://publiclab.org/notes/ygzstc/07-23-2014/detection-of-added-sugar-in-red-wine-using-visual-light-spectroscopy). It seems like added sugar does influence how light passes through the sample in a way that is measurable, but it requires careful calibration. From Betsy: "The comments below the experimental write-up seem to determine that the change in absorption is due to a reaction between the wine and the sugar, not an inherently detectable property of the sugar itself. This experiment wouldn't seem to be applicable to water samples." 
- Commercially available products like this [nitrate tester](https://nitrate.com/store/index.php/on-site-test-kits/handheld-photometer-introductory-package). $300+ seems pretty steep for a 3D printed case and what I assume is a light source, diffraction grating and camera inside. Or is it something else? Why do they only offer nitrate and phospohate detection? Betsy: "Although it's not emphasized on this site, this kit measures nitrate and phosphate concentration by enzymatically reducing the sample, which changes the sample color. You'd have to buy their enzymes and follow their established procedure for it to work."
- A recent [review paper](https://www.mdpi.com/2076-3417/10/19/6874) talks about what is possible, but neglects to discuss experimental setups/hardware. If I understand correctly, it also suggests that nitrite and nitrate can be measured without reagents but only in the UV range -- but none of our hardware options go down to wavelengths ~200-300. 
- Review of the [C12880 sensor module](https://impfs.github.io/review/)


### Open Questions
- Which chemicals can be detected using only spectrometry? Will most tests require the addition of a colorimetric reagent? We hope to minimize this as much as possible. 
- Should we use [method 1 (diffraction grating + camera, i.e. flourescence spectrometry)](https://publiclab.org/wiki/spectrometry) or [method 2 (Spectral Triad or other board)](./triad.md)? What are the trade-offs in terms of range (nm), accuracy, and cost? 
