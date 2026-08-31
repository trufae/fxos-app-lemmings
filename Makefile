all:
	rm -f ../fxos-app-lemmings.zip
	zip -r ../fxos-app-lemmings.zip *

webxdc: lemmings.xdc

lemmings.xdc:
	rm -f $@
	cp icon/256.png icon.png
	zip -r -9 $@ index.html manifest.toml icon.png \
		html icon img js levels style
	rm -f icon.png

clean:
	rm -f lemmings.xdc icon.png ../fxos-app-lemmings.zip

.PHONY: all webxdc clean
