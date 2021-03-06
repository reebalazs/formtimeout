
import os
from setuptools import setup, find_packages

def read(*rnames):
    return open(os.path.join(os.path.dirname(__file__), *rnames)).read()

version = '0.1.0'

setup(name='formtimeout',
      version=version,
      description="",
      long_description="",
      classifiers=[
          "Environment :: Web Environment",
          "Framework :: Plone",
          "Framework :: Zope2",
          "License :: OSI Approved :: GNU General Public License (GPL)",
          "Operating System :: OS Independent",
          "Programming Language :: Python",
        ],
      keywords='plone portlet',
      author='Balazs Ree',
      author_email='ree@greenfinity.hu',
      url='http://github.com/collective/formtimeout',
      license='GPLv2',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=[],
      include_package_data=True,
      zip_safe=False,
      extras_require=dict(
        test=[
            'Products.PloneTestCase',
        ]
      ),
      install_requires=[
          'setuptools',
          "plone.portlets",
          "plone.app.portlets",
          "plone.app.form>=1.1",
          "plone.i18n",
          'zope.component',
          'zope.formlib',
          'zope.i18nmessageid',
          'zope.interface',
          'zope.schema',
          'Zope2',
      ],
      dependency_links=[
      ],
      entry_points="""
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
